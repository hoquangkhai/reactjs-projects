import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

PostFiltersFrom.propTypes = {
  onSubmit: PropTypes.func,
};
PostFiltersFrom.defaultProps = {
  onSubmit: []
}

function PostFiltersFrom(props) {
  const {onSubmit} = props;
  const [serachTerm, setSearchTerm] = useState('')
  const typingTimeoutRef = useRef(null)

  function handleSearchTermChange (e) {
    setSearchTerm(e.target.value);
    if(!onSubmit) return;
    //debounce
    if(typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout( () => {
      const formValues = {
        searchTerm: e.target.value
      };
      onSubmit(formValues);
    },300)
  }

  return (
    <form>
      <input
        type="text"
        value = {serachTerm}
        onChange = {handleSearchTermChange}
      />
    </form>
  );
}

export default PostFiltersFrom;