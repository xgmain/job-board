<?php

namespace App\Http\Controllers;

use App\Job;
use Cache;
use Illuminate\Http\Request;

class JobController extends Controller
{

    /**
     * Get job list
     * @param
     * @method get
     * @return json
     */
    public function index()
    {
        try {
            // dd(Job::getALlDesc());
            // $jobs =  Job::paginate(5);
            $jobs = Cache::remember('jobs', 10, function() {
                return Job::paginate(5);
            });
            if(count($jobs) === 0) {
                throw new \Exception('Job is empty');
            }     

            return response()->json(['payload' => $jobs], 200);

        } catch(\Exception $e) {

            return response()->json(['error' =>  $e->getMessage()]);

        }
	}
    
    /**
     * Get single job
     * @param integer id
     * @method get
     * @return json
     */
	public function show($id)
	{
        try {

            if (! $job = Job::find($id)) {
                throw new \Exception('Job is not found');
            }

            return response()->json(['payload' => $job], 200);

        } catch(\Exception $e) {

            return response()->json(['error' =>  $e->getMessage()]);

        }
	}

    /**
     * Create a new job
     * @param lumen request
     * @method post
     * @return json
     */
	public function create(Request $request)
    {
		$this->validate($request, [
            'title' => 'required',
            'description' => 'required',
            'location' => 'required|regex:/^\d+\s[A-z]+\s[A-z]+/' //regex check location is valid, eg: 123 Flockhart Street Abbotsford 3067 VIC
        ]);
        
        try {

            if (! $job = Job::create($request->all())) {
                throw new \Exception('Job creation fails');
            }

            return response()->json(['payload' => $job], 201);

        } catch(\Exception $e) {

            return response()->json(['error' =>  $e->getMessage()]);

        }
	}
    
    /**
     * Delte a job
     * @param integer id
     * @method delete
     * @return json
     */
	public function delete($id)
	{
        try {

            if (! Job::findOrFail($id)->delete()) {
                throw new \Exception('Delete job fails');
            }

            return response('Deleted Successfully', 204);

        } catch(\Exception $e) {

            return response()->json(['error' =>  $e->getMessage()]);

        }
	}

}