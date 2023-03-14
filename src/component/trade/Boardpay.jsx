
import React, { useMemo, useState } from 'react';
import MaterialReactTable from 'material-react-table';
import { IconButton, Pagination, Tooltip, Typography } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import axios from 'axios';
import { useEffect } from 'react';
import { useRef } from 'react';
import './Boardpay.css';


const BoardTile = () => {
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  
    const [users, setUsers] = useState([]);


//더미 데이터 호출
  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/users')
  //     .then(res => setInfo(res.data))
  //     .catch(err => console.log(err));
  // }, []);
  
    // useEffect(() => {
        
    //   axios.get('https://localhost:8888/moneyboard/board/', {
       
    //       id: localStorage.getItem("id"),
    //   })
    //       .then(response => {
    //         console.log("useEffect");
    //         setUsers(response);
    //         console.log(users)
    //         });
    // }, []);

  const dada = [{
    id: 'ada'
  }]
  
  const { data, isError, isFetching, isLoading, refetch } =
    useQuery(
      [
        'table-data',
        columnFilters,
        globalFilter,
        pagination.pageIndex,
        pagination.pageSize,
        sorting,
      ],
      async () => {
        const url = new URL(
          // '/api/data',
          '/moneyboard/board/',
          process.env.NODE_ENV === 'production'
            // ? 'https://www.material-react-table.com'
            ? 'http://localhost:8888'
            // : 'http://localhost:3000/board',
            :
            //'http://localhost:3000/board
            'http://localhost:8888',
          console.log("https://jsonplaceholder.typicode.com")
        );
        url.searchParams.set('id', { id: localStorage.getItem("id") });
        // url.searchParams.set('users',
        //   `${pagination.pageIndex * pagination.pageSize}`);
        
        //   // `${pagination.pageIndex * pagination.pageSize}`,
        // // );
        // url.searchParams.set('size', `${pagination.pageSize}`);
        // url.searchParams.set('filters', JSON.stringify(columnFilters ?? []));
        // url.searchParams.set('globalFilter', globalFilter ?? '');
        // url.searchParams.set('sorting', JSON.stringify(sorting ?? []));

        const { data: axiosData } = await axios.get("http://localhost:8888/moneyboard/board/"+localStorage.getItem("id"));
          //localStorage.getItem("id") )
          //url.href);
        
          // axios.get('https://jsonplaceholder.typicode.com/users')
          // .then(response => {
          //   console.log("useEffect");
          //   axiosData(response);
          //   console.log(users)
          //   });
        console.log(data);
        console.log(axiosData);
        return axiosData;
      },
      { keepPreviousData: true },
    );

  const columns = useMemo(
    () => [
     
        {
        accessorKey: 'lastRegistDt',
        header: '날짜 ',
      },
      {
        accessorKey: 'membSn' ,
        header: '회원 번호',
      },
      {
        accessorFn: (row) => row.payTransferNo,
        header: "거래 번호",
      },
      {
        accessorKey: 'moneyTransferHstSn',
        header: '거래 일련번호',
      },
      {
        accessorKey: 'transferAmt',
        header: '거래 금액',
      },
        {
        accessorKey: 'transferTyCd',
        header: '거래 종류',
      },
    ],
    [],
  );
  console.log("확인용");

  
  console.log(pagination.pageSize);
  console.log(columnFilters);

  return (
    <MaterialReactTable
      columns={columns}
      data={data ?? []}
   
      // data={query =>
      //   new Promise((resolve, reject) => {
      //     let url = "http://localhost:8888/moneyboard/board/" + localStorage.getItem("id");
      //     fetch(url)
      //       .then(response => response.json())
      //       .then(result => {
      //         resolve({
      //           data: result.data,
      //           page: result.page - 1,
      //           totalCount: result.total,
      //       })
      //     })
      //   })
      //  } //data is undefined on first render
      initialState={{ showColumnFilters: true }}
      manualFiltering
      manualPagination
      manualSorting
      enableRowVirtualization
      enablePagination={true}
      
      muiToolbarAlertBannerProps={
        isError
          ? {
            color: 'error',
            children: 'Error loading data',
          }
          : undefined
      }
      onColumnFiltersChange={setColumnFilters}
      onGlobalFilterChange={setGlobalFilter}
      onPaginationChange={setPagination}
      onSortingChange={setSorting}
      renderTopToolbarCustomActions={() => (
        <Tooltip arrow title="Refresh Data">
          <IconButton onClick={() => refetch()}>
            {/* <Calender></Calender> */}
            {/* <DateDropdown></DateDropdown> */}
            <RefreshIcon />
          </IconButton>
        </Tooltip>
      )}
      rowCount={data?.meta?.totalRowCount ?? 10}
      state={{
        columnFilters,
        globalFilter,
        isLoading,
        pagination,
        showAlertBanner: isError,
        showProgressBars: isFetching,
        sorting,
      }}
    />
  );
};

const queryClient = new QueryClient();

const BoardPay = () => (
  <div className='pay-table'>
  <QueryClientProvider client={queryClient}>

      <BoardTile />

    </QueryClientProvider>

  </div>
    );

export default BoardPay;