<?php
/**
 * Created by PhpStorm.
 * User: tuan
 * Date: 2019-11-26
 * Time: 23:46
 */

namespace App\Services;


use Google_Client;
use Google_Service_Sheets;
use Google_Service_Sheets_ValueRange;

class GoogleSheetService
{
    public $client;

    public function __construct($authConfig) {
        $client = new Google_Client();
        $client->setAuthConfig($authConfig);
        $client->setApplicationName('Google sheet');
        $client->setScopes(Google_Service_Sheets::SPREADSHEETS);

        $sheetClient = new Google_Service_Sheets($client);

        $this->client = $sheetClient;
    }

    public function write($spreadsheetId, $range, $value) {
        $values = [
            $value
        ];
//        dd($values); exit;
        $body = new Google_Service_Sheets_ValueRange([
            'values' => $values
        ]);
        $params = [
            'valueInputOption' => 'RAW'
        ];
        $result = $this->client->spreadsheets_values->append($spreadsheetId, $range, $body, $params);

        return $result;
    }
}