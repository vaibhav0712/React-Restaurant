import RenderList from '../../layout/RenderList';

function Vegies() {
  const query = 'vegetarian';
  const style = {
    marginTop: '1rem',
  };
  return (
    <>
      <RenderList
        query={query}
        resultTitle={'Top ' + query}
        random={true}
        customStyle={style}
        number={5}
      />
    </>
  );
}

export default Vegies;
