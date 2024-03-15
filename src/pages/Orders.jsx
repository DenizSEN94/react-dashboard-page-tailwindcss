import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
  Selection,
  Search,
  Toolbar,
} from '@syncfusion/ej2-react-grids';
import { ordersData, ordersGrid } from '../data/dummy';
import { Header } from '../components';

const Orders = () => {
  let grid;
  const toolbarClick = (args) => {
    if (grid && args.item.id === 'Grid_excelexport') {
      grid.excelExport();
    } else if (grid && args.item.id === 'Grid_pdfexport') {
      grid.pdfExport();
    }
  };
  return (
    <div className='m-2 md:m-10 p-2 m:p-10 bg-white rounded-3xl'>
      <Header category='Page' title='Orders' />
      <GridComponent
        id='Grid'
        dataSource={ordersData}
        allowPaging
        allowSorting
        toolbar={['Search', 'ExcelExport', 'PdfExport', 'Delete']}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width='auto'
        allowExcelExport={true}
        allowPdfExport={true}
        toolbarClick={toolbarClick}
        ref={(g) => (grid = g)}
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            Selection,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            PdfExport,
            Edit,
            Search,
            Toolbar,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
