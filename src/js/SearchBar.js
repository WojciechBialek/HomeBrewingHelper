import { SearchBar } from 'react-native-elements'

<SearchBar
onChangeText={someMethod}
onClear={someMethod}
placeholder='Type Here...' />

    <SearchBar
clearIcon={{ color: 'red' }}
searchIcon={false} // You could have passed `null` too
onChangeText={someMethod}
onClear={someMethod}
placeholder='Type Here...' />

    <SearchBar
round
searchIcon={{ size: 24 }}
onChangeText={someMethod}
onClear={someMethod}
placeholder='Type Here...' />

    <SearchBar
lightTheme
searchIcon={<CustomComponent />}
onChangeText={someMethod}
onClear={someMethod}
placeholder='Type Here...' />

    <SearchBar
lightTheme
onChangeText={someMethod}
onClear={someMethod}
placeholder='Type Here...' />

    <SearchBar
showLoading
platform="ios"
cancelButtonTitle="Cancel"
placeholder='Search' />

    <SearchBar
showLoading
platform="android"
placeholder='Search' />

    <SearchBar
showLoading
platform="android"
cancelIcon={{ type: 'font-awesome', name: 'chevron-left' }}
placeholder='Search' />


export default SearchBar;