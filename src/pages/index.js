export default function Home() {
  return (
    <div>
      <form className='recipe-search'>
        <input type='text' />
        <button type='submit'>Find Recipe</button>
      </form>
      <section className='popular-recipes'>
        <h2>Popular Recipes</h2>
        <ul>
          <li>Recipe</li>
          <li>Recipe</li>
          <li>Recipe</li>
          <li>Recipe</li>
          <li>Recipe</li>
        </ul>
      </section>
    </div>
  );
}
