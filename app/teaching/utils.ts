import path from "path";
import { getMDXData, formatDate, type MDXDataItem } from "@/lib/mdx-utils";

/**
 * 获取所有新闻数据
 * @returns {Array} 新闻数据对象数组
 */
export function getTeaching(): MDXDataItem[] {
  return getMDXData(path.join(process.cwd(), "data", "teaching"));
}

// 导出格式化日期函数，方便组件直接使用
export { formatDate };
