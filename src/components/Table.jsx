import React from "react";
import {
  Table as _Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const Table = ({ data, config }) => {
  const dataRendered = data.map((dataRow) => {
    return (
      <Tr key={dataRow._id}>
        {config.map(({ tag, render }, i) => {
          return (
            <Td
              className={0 === i ? "hidden" : ""}
              key={`${dataRow._id}-${tag}`}
            >
              {render(dataRow)}
            </Td>
          );
        })}
      </Tr>
    );
  });

  return (
    <TableContainer>
      <_Table variant="simple" size="lg">
        <Thead>
          <Tr>
            {config.map(({ tag }, i) => {
              return (
                <Th key={tag} className={0 === i ? "hidden" : ""}>
                  {tag}
                </Th>
              );
            })}
          </Tr>
        </Thead>
        <Tbody>{dataRendered}</Tbody>
      </_Table>
    </TableContainer>
  );
};

export default Table;
