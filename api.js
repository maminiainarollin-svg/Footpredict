export default {
  async fetch(request) {
    const url = new URL(request.url);
    const sport = url.searchParams.get("sport") || "soccer_epl";
    
    const apiKey = "fc9238850f88a6c97955afc22de3eb6022363aac2220f7c0742ede142e9c39ad";
    const apiUrl = `https://api.odds-api.io/v4/sports/${sport}/odds/?apiKey=${apiKey}&regions=eu&markets=h2h&oddsFormat=decimal`;
    
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      
      return new Response(JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      });
    }
  }
};
