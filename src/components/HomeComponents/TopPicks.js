import RenderList from '../../layout/RenderList';

function TopPicks() {
  const query = '';
  const style = {
    marginTop: '2.3rem',
  };
  return (
    <>
      <RenderList
        customStyle={style}
        query={query}
        resultTitle={'Top picks for you'}
        random={true}
      />
    </>
  );
}
export default TopPicks;
