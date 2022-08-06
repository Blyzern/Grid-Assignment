import React from 'react';
import './materials.css';
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Edit,
  Group,
  Toolbar,
  ColumnChooser,
  DetailRow,
  Filter,
  Inject,
} from '@syncfusion/ej2-react-grids';
import { isEmpty, debounce } from 'lodash';
import { childGridOptions, filterOptions, customButtonConfig } from './config';
import { fetchWrapper } from '../../utils/fetchWrapper';
import MaleIcon from '../../icons/maleIcon';
import FemaleIcon from '../../icons/femaleIcon';
import { CustomButton, CustoToolBar } from './styles';

const nullValuePlaceholder = '--';

export const CustomGrid = ({ data }) => {
  let grid = null;

  const genderTemplate = (props) => {
    const isGenderNull = props?.Gender === null;
    if (!isGenderNull) {
      return props?.Gender === 'Male' ? <MaleIcon /> : <FemaleIcon />;
    }
    return nullValuePlaceholder;
  };

  const childGridOptions = {
    columns: [
      {
        field: 'Emails',
        headerText: 'Emails',
        width: '100',
        textAlign: 'Left',
      },
    ],
    dataSource: data,
    editSettings: {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode: 'Dialog',
    },
    queryString: 'Emails',
  };

  const filterOptions = {
    type: 'CheckBox',
  };

  const accessor = (field, props) => {
    return isEmpty(props[field]) ? nullValuePlaceholder : props[field];
  };

  const maleFilter = () => {
    grid.filterByColumn('Gender', 'equal', 'Male');
  };
  const femaleFilter = () => {
    grid.filterByColumn('Gender', 'equal', 'Female');
  };

  const clearFilter = () => {
    grid.clearFiltering();
  };

  const deleteOdds = () => {
    grid.dataSource = grid.dataSource.filter((e, i) => i % 2 === 1);
    grid.refresh();
  };

  const debounceFunction = debounce(async () => {
    const endpoint =
      'https://services.odata.org/TripPinRESTierService/(S(hespbvdrrmhquk5vqlzcpbro))/People';
    const newData = await fetchWrapper(endpoint, 'GET');
    grid.dataSource = newData.data.value;
    grid.refresh();
  }, 1000);
  // <CustomButton onClick={maleFilter}>Male Filter</CustomButton>

  return (
    <div style={{ margin: '10%', marginTop: '5%' }}>
      <CustoToolBar>
        <CustomButton onClick={femaleFilter}>Female Filter</CustomButton>
        <CustomButton onClick={deleteOdds}>Delete Odds</CustomButton>
        <CustomButton onClick={debounceFunction}>Debounce</CustomButton>
        <CustomButton onClick={clearFilter}>Clear Filter</CustomButton>
      </CustoToolBar>
      <GridComponent
        // eslint-disable-next-line no-return-assign
        ref={(g) => (grid = g)}
        dataSource={data}
        allowPaging="true"
        allowGrouping="true"
        allowFiltering="true"
        pageSettings={{ pageSize: 5 }}
        editSettings={{
          allowEditing: true,
          allowAdding: true,
          allowDeleting: true,
        }}
        filterSettings={filterOptions}
        childGrid={childGridOptions}
        toolbar={['Add', 'ColumnChooser']}
        showColumnChooser="true"
        emptyrow="--"
      >
        <ColumnsDirective>
          <ColumnDirective
            field="UserName"
            headerText="User Name"
            width="50"
            textAlign="Left"
            valueAccessor={accessor}
          />
          <ColumnDirective
            field="FirstName"
            headerText="First Name"
            width="50"
            textAlign="Left"
            valueAccessor={accessor}
          />
          <ColumnDirective
            field="LastName"
            headerText="Last Name"
            width="50"
            textAlign="Left"
            valueAccessor={accessor}
          />
          <ColumnDirective
            field="Gender"
            headerText="Gender"
            width="40"
            textAlign="Left"
            valueAccessor={accessor}
            template={genderTemplate}
          />
          <ColumnDirective
            field="Age"
            headerText="Age"
            width="40"
            textAlign="Left"
            valueAccessor={accessor}
          />
          <ColumnDirective
            field="Emails"
            headerText="Emails"
            width="100"
            textAlign="Left"
            format="C2"
            valueAccessor={accessor}
          />
        </ColumnsDirective>
        <Inject
          services={[
            Page,
            Edit,
            Group,
            Toolbar,
            ColumnChooser,
            DetailRow,
            Filter,
          ]}
        />
      </GridComponent>
    </div>
  );
};
