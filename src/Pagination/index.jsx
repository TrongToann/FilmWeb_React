import {faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from "react";
import PropTypes from 'prop-types' 

Pagination.propTypes = {
    pagination : PropTypes.object.isRequired , 
    onPageChange : PropTypes.func, 

} ;

Pagination.defaultProps = {
    onPageChange : null ,
}

function Pagination(props) {
    const {pagination, onPageChange} = props ; 
    const {page, limit , totalRows} = pagination ; 
    const totalPages = Math.ceil(totalRows / limit) 

    function handlePageChange(newPage) {
        if (onPageChange) {
            onPageChange(newPage)  
        }
    }

    return(
        <div className="Paginantion">
            <div style={{color: 'white', fontSize: '18px', fontWeight: '550', padding: '0px 50px '}}>
                {page}/{totalPages}
            </div>
            <button 
                disabled={page <= 1} 
                onClick={() => handlePageChange(page - 1 )} 
                style={{padding:'0px 30px ', height:'30px'}}
            >
               
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button 
                disabled={page >= totalPages} 
                onClick={() => handlePageChange(page + 1 )} 
                style={{padding:'0px 30px ' , height:'30px'}}
            >
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
    ) ;
}
export default Pagination ;