

function Search() {
  return (
    <section>
         <h1>GitHub Finder</h1>
        <div className="search">
            <form>
                <input type="text" placeholder="Profile" name="Input" />
                <input type="submit" value="Search"/>
            </form>
        </div>
    </section>
  )
}

export default Search