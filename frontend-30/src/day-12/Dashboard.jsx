import React, { useEffect, useMemo, useState } from "react";
import Widget from "./comp/Widget";
import StatsWidget from "./comp/StatsWidget";

const API_URL = "https://dummyjson.com";

const Dashboard = () => {
  const [data, setData] = useState({
    users: [],
    products: [],
    posts: [],
  });
  const [loading, setLoading] = useState({
    users: false,
    products: false,
    posts: false,
  });
  const [error, setError] = useState({
    users: null,
    products: null,
    posts: null,
  });

  const fetchDashBoadrdData = async () => {
    setLoading({
      users: true,
      products: true,
      posts: true,
    });
    try {
      const [userRes, productRes, postsRes] = await Promise.all([
        fetch(`${API_URL}/users`),
        fetch(`${API_URL}/products`),
        fetch(`${API_URL}/posts`),
      ]);
      if (!userRes.ok || !productRes.ok || !postsRes.ok) {
        throw new Error("failed to dashboard data");
      }
      const [usersData, productsData, postsData] = await Promise.all([
        userRes.json(),
        productRes.json(),
        postsRes.json(),
      ]);

      setData({
        users: usersData,
        products: productsData,
        posts: postsData,
      });
    } catch (err) {
      setError({
        users: "failed to load user",
        products: "failed to load products",
        posts: "failed to load posts",
      });
    } finally {
      setLoading({
        users: false,
        products: false,
        posts: false,
      });
    }
  };

  useEffect(() => {
    fetchDashBoadrdData();
  }, []);

  const totalRevenue = useMemo(() => {
    return data.products?.products?.reduce((acc, curr) => acc + curr.price, 0) ?? 0;
  }, [data]);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="widget-cont">
        <Widget title="users data" loading={loading.users} error={error.users}>
          <p>Toatal Users : {data.users?.total}</p>
          <p>showing {data.users?.users?.length} reults</p>
        </Widget>
        <Widget
          title="products data"
          loading={loading.products}
          error={error.products}
        >
          <p>Toatal Products : {data.products?.total}</p>
          <p>showing {data.products?.products?.length} reults</p>
        </Widget>
        <Widget title="posts data" loading={loading.posts} error={error.posts}>
          <p>Toatal Post : {data.posts?.total}</p>
          <p>showing {data.posts?.posts?.length} reults</p>
        </Widget>
        <Widget
          title="recent posts"
          loading={loading.posts}
          error={error.posts}
        >
          <ul>
            {data?.posts?.posts?.slice(0, 5).map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </Widget>
      </div>
      <div>
        <StatsWidget
          title="total Revenue in $"
          value={Math.round(totalRevenue)}
        />
      </div>
    </div>
  );
};

export default Dashboard;
