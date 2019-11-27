<?php
namespace App\Http\Controllers;


use App\Services\GoogleSheetService;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function index() {
        return view('index');
    }

    public function submit(Request $request, GoogleSheetService $service) {
        $data = $request->all();
        unset($data['t']);
        unset($data['action']);
        unset($data['_token']);

        $data['license'] = \json_encode($data['license']);

        foreach($data as $k => $v) {
            if(empty($v)) {
                $data[$k] = '';
            }
        }

        $service->write(env('SHEET_ID'), env('SHEET_NAME'), array_values($data));
        return 'ok';
    }

    public function test(GoogleSheetService $service) {

    }
}