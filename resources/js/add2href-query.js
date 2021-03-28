let responsive_query = document.getElementsByClassName('responsive-query')

for (let responsiveQueryKey of responsive_query) {
    responsiveQueryKey.href = responsiveQueryKey.href + query;
}
