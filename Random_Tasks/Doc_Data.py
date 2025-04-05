import requests
from bs4 import BeautifulSoup


def main(url):
    # Prompt for URL if not provided
    if not url:
        url = input("Enter the URL: ")

    response = requests.get(url)  # Send a GET request to the URL
    if response.status_code == 200:
        # Parse the page content
        soup = BeautifulSoup(response.text, 'html.parser')
        content = soup.get_text(separator='\n')  # Extract the text
        content = content.strip()  # Clean up extra spaces
        del response
    else:
        print("Failed to retrieve the webpage.")
        return

    # Find the content starting after the "y-coordinate" line
    is_started, new_content = False, ""
    for line in content.splitlines():
        if is_started:
            new_content += line + "\n"
        if line.strip() == "y-coordinate":
            is_started = True

    # Split the content into lines and group the coordinates and characters
    lines = new_content.split("\n")
    coordinates = []
    for i in range(0, len(lines), 3):
        coordinates.append(lines[i:i + 3])

    # Find the grid dimensions (max x and y values)
    max_x, max_y = 0, 0
    for entry in coordinates:
        if len(entry) != 3:
            continue
        if int(entry[0]) > max_x:
            max_x = int(entry[0])
        if int(entry[2]) > max_y:
            max_y = int(entry[2])

    # Create an empty grid based on the max dimensions
    max_x, max_y = max_x + 1, max_y + 1
    grid = [[" " for _ in range(max_x)] for _ in range(max_y)]

    # Place the characters at their respective coordinates on the grid
    for entry in coordinates:
        if len(entry) != 3:
            continue
        x_pos = int(entry[0])
        char = entry[1]
        y_pos = int(entry[2])
        grid[y_pos][x_pos] = char

    # Print the grid to reveal the hidden message
    for row in grid:
        print("".join(row))


# Call the function with the URL
url = "https://docs.google.com/document/d/e/2PACX-1vQGUck9HIFCyezsrBSnmENk5ieJuYwpt7YHYEzeNJkIb9OSDdx-ov2nRNReKQyey-cwJOoEKUhLmN9z/pub"
main(url)
