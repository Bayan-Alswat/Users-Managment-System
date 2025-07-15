<?php
header('Content-Type: application/json');
$conn = new mysqli("localhost", "root", "", "user_data");
if ($conn->connect_error) die(json_encode(["error" => "Failed." . $conn->connect_error]));

switch ($_SERVER['REQUEST_METHOD']) {
case 'POST':
$data = json_decode(file_get_contents('php://input'), true);
$name = $conn->real_escape_string($data['name']);
$age = (int)$data['age'];
$sql = "INSERT INTO users (name, age) VALUES ('$name', $age)";
echo json_encode(["success" => $conn->query($sql), "id" => $conn->insert_id, "name" => $name, "age" => $age, "status" => 0]);
break;
case 'GET':
$result = $conn->query("SELECT id, name, age, status FROM users ORDER BY id DESC");
$users = [];
while($row = $result->fetch_assoc()) $users[] = $row;
echo json_encode($users);
break;
case 'PUT':
$data = json_decode(file_get_contents('php://input'), true);
$id = (int)$data['id'];
$newStatus = (int)$data['status'];
$sql = "UPDATE users SET status = $newStatus WHERE id = $id";
echo json_encode(["success" => $conn->query($sql), "id" => $id, "newStatus" => $newStatus]);
break;
default:
echo json_encode(["error" => "Error"]);
}
$conn->close();
?>

