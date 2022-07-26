<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreEmployeeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            "personalData.first_name" => 'required',
            "personalData.middle_name" => 'sometimes',
            "personalData.last_name" => 'required',
            "personalData.father_name" => 'required',
            "personalData.dob" => 'required',
            "personalData.gender" => 'required',
            "personalData.material_status" => 'required',
            "personalData.photo" => 'sometimes',
        ];
    }
}
