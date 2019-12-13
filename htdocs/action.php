<?php

header('Content-Type: application/json');

function logging($str, $fileName = 'log.txt')
{
    if (is_array($str)) {
        $str = json_encode($str);
    }
    $rootPath = __DIR__;
    $logFilePath = $rootPath . DIRECTORY_SEPARATOR . $fileName;

    $options = [
        'max_log_size' => 200 * 1024
    ];
    if (!is_dir(dirname($logFilePath))) {
        mkdir(dirname($logFilePath));
    }
    if (file_exists($logFilePath) && filesize($logFilePath) >= $options['max_log_size']) {
        unlink($logFilePath);
    }

    $fp = fopen( $logFilePath, 'a' );
    $dateFormat = 'd/m/Y H:i:s';
    $str = PHP_EOL . PHP_EOL . date($dateFormat) . PHP_EOL . $str;

    fwrite( $fp, $str );
    fclose( $fp );

    return true;
}

$actionName = isset($_GET['a']) && !is_array($_GET['a']) ? $_GET['a'] : '1';

logging("STARTED-{$actionName}");

sleep(4);// Very resource-intensive operation that takes 3 seconds

logging("COMPLETED-{$actionName}");

echo json_encode([
    'success' => true,
    'data' => ['name' => 'test', 'title' => 'This is a test']
]);
