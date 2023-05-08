import base64
import json
import system

def runAction(self, event):
    # Replace 'your_api_key' and 'your_endpoint' with your actual Azure API key and endpoint
    api_key = 'your_api_key'
    endpoint = 'your_endpoint'

    # Set the Computer Vision API's Analyze Image URL
    analyze_url = endpoint + 'vision/v3.2/analyze'

    # Read the image file
    image_path = 'path/to/your/image'  # Replace this with the path to your image
    with open(image_path, 'rb') as image_file:
        image_data = image_file.read()

    # Encode the image in base64
    image_base64 = base64.b64encode(image_data)

    # Set the headers for the API request
    headers = {
        'Content-Type': 'application/octet-stream',
        'Ocp-Apim-Subscription-Key': api_key
    }

    # Set the API parameters
    params = {
        'visualFeatures': 'Description,Tags',
        'language': 'en'
    }

    # Call the API
    client = system.net.httpClient()
    response = client.post(analyze_url, headers=headers, params=params, data=image_data)

    # Check if the request was successful
    if response.statusCode == 200:
        # Parse the API response
        analysis = json.loads(response.text)

        # Get the image description and tags
        image_description = analysis['description']['captions'][0]['text']
        image_tags = ', '.join(analysis['tags'])

        # Display the image description and tags
        system.gui.messageBox(f"Description: {image_description}\nTags: {image_tags}")

    else:
        # If the request was not successful, display an error message
        system.gui.errorBox('Error calling the Azure Computer Vision API.')
