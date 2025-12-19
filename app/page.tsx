
export default async function Home() {
 
  const response = await fetch('http://localhost:4000');
  const data = await response.json();

  return (
    <main style={{ padding: '50px', fontFamily: 'sans-serif' }}>
      <h1>مرحباً بك في مشروعي (Next.js)</h1>
      <div style={{ border: '1px solid #ccc', padding: '20px', marginTop: '20px' }}>
        <h3>بيانات قادمة من Service 1:</h3>
        <p style={{ color: 'blue', fontSize: '20px' }}>
          {data.message} 
        </p>
      </div>
    </main>
  );
}