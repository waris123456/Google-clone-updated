// Supereme Code By Abdul Waris
//Do not copy, it is the result of hours of searching and hard working

function googleSearch() {
    var searchText = document.getElementById("searchInput").value;
    var googleUrl = 'https://www.google.com/search?q={SEARCH}&rlz=1C1SQJL_enPK1058PK1058&oq=js&aqs=chrome..69i57j35i39i650l2j0i131i433i512j69i64j69i60l3.4234j0j7&sourceid=chrome&ie=UTF-8'
    var usableSearchText = searchText.replace(" ", "+")
    var search = googleUrl.replace("{SEARCH}", usableSearchText)
    console.log(search)
    window.open(search, "_self")
}