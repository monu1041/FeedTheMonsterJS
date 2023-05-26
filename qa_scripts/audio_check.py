
import requests
import json
url = "https://devcuriousreader.wpcomstaging.com/container_check/arabic.json" 
file_path = "arabic_output.txt"
response = requests.get(url)
file =open(file_path, 'w',encoding='utf-8')
if response.status_code == 200:
    data = json.loads(response.content)
else:
    print("Error:", response.status_code)
for level  in data['Levels']:
    for puzzle in level['Puzzles']:
        prompt_audio = puzzle['prompt']['PromptAudio']
        audio_response = requests.head(prompt_audio)
        if audio_response.status_code == 200:
            print(f"Successful")
        else:
            print(f"Failed")
            file.write(prompt_audio+"\n") 

            