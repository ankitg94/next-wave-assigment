import axios from "axios";


export const handleLogin = async (username, password, setResponseMsg) => {
  try {
    const res = await axios.post("https://fakestoreapi.com/auth/login", {
      username,
      password,
    });

    if (res.data.token) {
      setResponseMsg("✅ Login successful!");
    } else {
      setResponseMsg("❌ Login failed!");
    }
  } catch (error) {
    setResponseMsg("❌ Error during login.");
  }
};


export const fetchProducts = async (setProducts, setLoading) => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };