  import * as XLSX from 'xlsx'
import { saveAs } from 'file-saver'

  const downloadExcel = async (formattedData: any, sheetName: string, fileName: string) => {
    const worksheet = XLSX.utils.json_to_sheet(formattedData)
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName)

    const excelBuffer = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    })
    const dataBlob = new Blob([excelBuffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    })
    saveAs(dataBlob, `${fileName}.xlsx`)
  }

export { downloadExcel }