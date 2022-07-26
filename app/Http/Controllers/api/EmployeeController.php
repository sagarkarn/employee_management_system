<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreEmployeeRequest;
use App\Http\Requests\UpdateEmployeeRequest;
use App\Models\BankInfo;
use App\Models\Contact;
use App\Models\Employee;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;
use PhpParser\JsonDecoder;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Employee::with('user')->with('job')->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreEmployeeRequest $request)
    {

        return $request->all();

        $personal_data = $request->json('personalData');
        $official_data = $request->json('officialData');
        $contact_data = $request->json('contactData');
        $bank_data = $request->json('bankData');

        $personal_data['mobile'] = $contact_data['mobile'];
        $personal_data['password'] = Crypt::encrypt(rand(10000000, 99999999));

        $official_data['created_by'] = Auth::id();

        $user = User::create($personal_data);

        $official_data['user_id'] = $user->id;
        $contact_data['user_id'] = $user->id;
        $bank_data['user_id'] = $user->id;

        Employee::create($official_data);
        Contact::create($contact_data);
        BankInfo::create($bank_data);

        return response([
            "status" => "success",
            "message" => "Employee Created Successfully"
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return User::with('employee')->with('contact')->with('bankInfo')->find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateEmployeeRequest $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
