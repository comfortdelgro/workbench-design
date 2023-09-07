import SearchField from '@comfortdelgro/react-compass/searchfield'

function SearchFieldBasic() {
  return (
    <div>
      <SearchField
        placeholder='Search'
        onSubmit={(text) => console.log(text)}
      />
      <SearchField
        isDisabled
        placeholder='Search'
        onSubmit={(text) => console.log(text)}
      />
    </div>
  )
}

export default SearchFieldBasic
