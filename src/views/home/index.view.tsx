import { useEffect } from 'react';

const HomeView = () => {
  useEffect(() => {
    fetch('/api/dummy')
      .then(response => response.json())
      .then(console.log)
      .catch(console.error);
  }, []);

  return <div>Home화면</div>;
};

export default HomeView;
