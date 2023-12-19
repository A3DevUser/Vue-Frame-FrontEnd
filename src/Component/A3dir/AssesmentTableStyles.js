import styled from "styled-components";

export const Styles = styled.div`



.tableCont::-webkit-scrollbar{
  width: .5vw;
  height : 1vh
}

.tableCont::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius : 20px
}

  .table {
    border: 1px solid #ddd;
 
    .tr {
      :last-child {
        .td {
          border-bottom: 0;
        }
      }
    }

    .resizer {
      display: inline-block;
      width: 10px;
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      transform: translateX(50%);
      z-index: 1;
      /* prevent scroll on touch devices */
      touch-action: none;
    }
    
    

 
    .th{
      padding: 5px;
      border-bottom: 1px solid #ddd;
      border-right: 1px solid #ddd;
      background-color: #60b3b3fa;
      color: white;
      
      text-align: center;
      overflow: hidden;
 
      :last-child {
        border-right: 0;
      }
    }

    .td {
        padding: 5px;
        border-bottom: 1px solid #ddd;
        border-right: 1px solid #ddd;
        background-color: white;
        color: black;
        text-align: left;
        overflow: hidden;
   
        :last-child {
          border-right: 0;
        }
      }
 
    &.sticky {
      overflow: scroll;
      .header,
      .footer {
        position: sticky;
        z-index: 1;
        width: fit-content;
      }
 
      .header {
        top: 0;
        box-shadow: 0px 3px 3px #ccc;
      }

      .header1 {
        position: sticky;
        width: fit-content;
        top: 60px;
        box-shadow: 0px 3px 3px #ccc;
        z-index: 2;
      }
 
      .footer {
        bottom: 0;
        box-shadow: 0px -3px 3px #ccc;
      }
 
      .body {
        position: relative;
        z-index: 0;
      }
 
      [data-sticky-td] {
        position: sticky;
      }
 
      [data-sticky-last-left-td] {
        box-shadow: 2px 0px 3px #ccc;
      }
 
      [data-sticky-first-right-td] {
        box-shadow: -2px 0px 3px #ccc;
      }
    }
  }
`;
