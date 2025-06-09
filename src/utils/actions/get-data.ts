export async function getDataHome() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/objects/6846ba0829a93ebe69ecbc6d?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
