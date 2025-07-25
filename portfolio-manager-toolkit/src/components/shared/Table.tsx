import styled from "styled-components";
import { ITheme } from "../../interfaces/ITheme";

export const Table = styled.table<{ theme: ITheme }>`
  color: ${({ theme }) => theme.colors.darkText};
  border-collapse: collapse;
  width: 100%;
`;

export const TableRow = styled.tr<{ theme: ITheme }>`
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryAlternate};
    filter: brightness(110%);
  }
`;

export const TableCell = styled.td<{ theme: ITheme }>`
  border: 1px solid ${({ theme }) => theme.colors.primaryAlternate};
  padding: 1rem;
  text-align: left;
`;

export const TableHeader = styled.th<{ theme: ITheme; active: boolean }>`
  color: ${({ theme, active }) =>
    active ? theme.colors.primaryAlternate : theme.colors.lightText};
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  border: 1px solid ${({ theme }) => theme.colors.primaryAlternate};
  font-weight: bold;
  padding: 1rem;
  text-align: left;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryAlternate};
  }
`;

export const SortIcon = styled.span<{ theme: ITheme }>`
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  border: none;
  cursor: pointer;
  margin-left: 2rem;
`;
