<?php
// database connection
include('../inc/db.php');

// if there is a post request
if($_SERVER['REQUEST_METHOD'] === 'POST') {

	// select all projects
	$sql = 'SELECT * FROM projects';
	$result = $conn->query($sql);

	if ($result->num_rows > 0) {

		$allTags = '';
		
		// iterate through each project
		while($row = $result->fetch_assoc()) {

			// append each projects tags to eachother
			$allTags .= ','.$row['tags'];

			// explode projects tags
			$projectTags = explode(',', $row['tags']);
			$eachProjectTags = $projectTags;

			for($i = 0; $i<count($projectTags) ; $i++) {
				$projectTags[$i] = '<li class="project-overlay-tag">'.$projectTags[$i].'</li>';
			}

			// implode project tags
			$projectTags = implode(' ', $projectTags);

			// store project details in object
			$data['project'][$row['id']]['date'] = $row['date'];
			$data['project'][$row['id']]['id'] = $row['id'];
			$data['project'][$row['id']]['title'] = $row['title'];
			$data['project'][$row['id']]['description'] = $row['description'];
			$data['project'][$row['id']]['about'] = $row['about'];
			$data['project'][$row['id']]['technical'] = $row['technical'];
			$data['project'][$row['id']]['url'] = $row['url'];
			$data['project'][$row['id']]['gitUrl'] = $row['gitUrl'];
			$data['project'][$row['id']]['tags'] = $projectTags;
			$data['project'][$row['id']]['eachTag'] = $eachProjectTags;
		
			// select and insert all project images
			$sqlImg = 'SELECT * FROM projectImages';
			$resultImg = $conn->query($sqlImg);

			if ($resultImg->num_rows > 0) {
				
				// iterate through each project
				while($rowImg = $resultImg->fetch_assoc()) {

					// check if the current project id is equal to the picture project id
					if($rowImg['project_id'] == $row['id']) {
					// store project details in object if its the same project
					$data['project'][$row['id']]['images'][$rowImg['id']] = $rowImg['project_id'].'_'.$rowImg['pic'].'.'.$rowImg['ext'];
					}
				
				}
				
			}
		}

		// remove the first comma from string of tags
		$allTags = ltrim($allTags, ',');

		// explode string of tags into array
		$allTags = explode(',', $allTags);

		// remove duplicate values by flipping keys and values
		$allTags = array_flip($allTags); 
	
		// restore the array elements by flipping keys and values again
		$allTags = array_flip($allTags);
	
		// re-order the array keys
		$allTags = array_values($allTags);
		
		// store array of all tags into data
		$data['tags'] = $allTags;
		
	}

echo json_encode($data);
exit;
}