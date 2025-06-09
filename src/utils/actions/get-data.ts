export async function getDataHome() {
  try {
    const response = await fetch(
      `${process.env.COSMIC_API_URL}/objects/6846ba0829a93ebe69ecbc6d?pretty=true&read_key=${process.env.COSMIC_READ_KEY}&depth=1&props=slug,title,metadata,type`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
