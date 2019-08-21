<?php

use App\User;

class JobTest extends TestCase
{
	public function testApplication()
	{
		$this->get("/", []);
		$this->seeStatusCode(200);
	}

	public function testShouldReturnJobList() {
        $this->get("/api/jobs", []);
		$this->seeStatusCode(200);
        $this->seeJsonStructure([
        'payload' => ['*' => 
				[
					'id',
					'title',
					'description',
					'location',
					'created_at',
					'updated_at',
					'deleted_at'
				]
			]
        ]);
        
	}
	
	public function testShouldReturnJob() {
		$this->get("/api/jobs/1", []);
		$this->seeStatusCode(200);
        $this->seeJsonStructure([
           	'payload' =>
				[
					'id',
					'title',
					'description',
					'location',
					'created_at',
					'updated_at',
					'deleted_at'
				]
			
		]);
	}

	public function testShouldCreateProduct() {
		$parameters = [
            'title' => 'Software Engineer',
			'description' => 'Permenent position in sidekicker',
			'location'=> '123 Flockhart Street Abbotsford 3067 VIC'
        ];
        $this->post("/api/jobs", $parameters, []);
        $this->seeStatusCode(201);
        $this->seeJsonStructure(
            ['payload' =>
                [
                    'id',
					'title',
					'description',
					'location',
					'created_at',
					'updated_at'
                ]
            ]    
        );
	}

	public function testShouldDeleteProduct() {
        $this->delete("/api/jobs/2", [], []);
        $this->seeStatusCode(204);
	}

	// public function testLogin() {
	// 	$user = factory(User::class)->make();
	// 	$response = $this->actingAs($user)->post('/api/auth/login');
	// 	$response->seeStatusCode(200);
	// }

	// public function testUserCanLogin() {
	// 	$response = $this->post('/api/auth/login');
	// 	$response->seeStatusCode(200);
	// }

	// public function testUserCanLoginWithCredentials() {
	// 	$user = factory(User::class)->create([
	// 		'password' => Hash::make('12345'),
	// 	]);

	// 	$response = $this->actingAs($user)->post('/api/auth/login', [
	// 		'email' => $user->email,
	// 		'password' => $user->password,
	// 	]);

	// 	$response->seeStatusCode(200);
	// }

}