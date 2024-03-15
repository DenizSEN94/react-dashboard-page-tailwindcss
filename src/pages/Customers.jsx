import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  Search,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
  Selection,
  Toolbar,
} from '@syncfusion/ej2-react-grids';
import { Header } from '../components';
import { customersData, customersGrid } from '../data/dummy';

const Customers = () => {
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
      <Header category='Page' title='Customers' />
      <GridComponent
        id='Grid'
        dataSource={customersData}
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
          {customersGrid.map((item, index) => (
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

export default Customers;
