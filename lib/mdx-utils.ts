import fs from 'fs';
import path from 'path';
import { parseISO, format } from 'date-fns';

export interface FrontmatterMetadata {
  [key: string]: string;
}

export interface ParsedFrontmatter {
  metadata: FrontmatterMetadata;
  content: string;
}

export interface MDXDataItem {
  metadata: FrontmatterMetadata;
  slug: string;
  content: string;
}

/**
 * 解析 MDX 文件的前置元数据
 * @param {string} fileContent - MDX 文件内容
 * @returns {Object} 包含元数据和内容的对象
 */
export function parseFrontmatter(fileContent: string): ParsedFrontmatter {
  const frontmatterRegex = /^---\s*\r?\n([\s\S]*?)\r?\n---\s*(?:\r?\n|$)/;
  const match = frontmatterRegex.exec(fileContent);

  // If no frontmatter exists, return the content without metadata
  if (!match) {
    return {
      metadata: {},
      content: fileContent.trim(),
    };
  }

  const frontMatterBlock = match[1];
  const content = fileContent.replace(frontmatterRegex, '').trim();
  const metadata: FrontmatterMetadata = {};

  frontMatterBlock.split(/\r?\n/).forEach((line) => {
    if (!line.trim()) return;

    const separatorIndex = line.indexOf(':');
    if (separatorIndex === -1) return;

    const key = line.slice(0, separatorIndex).trim();
    let value = line.slice(separatorIndex + 1).trim();

    value = value.replace(/^['"]|['"]$/g, '');
    metadata[key] = value;
  });

  return { metadata, content };
}

/**
 * 获取指定目录下的所有 MDX 文件
 * @param {string} dir - 目录路径
 * @returns {Array} MDX 文件名数组
 */
export function getMDXFiles(dir: string): string[] {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

/**
 * 读取 MDX 文件并解析其内容
 * @param {string} filePath - 文件路径
 * @returns {Object} 包含元数据和内容的对象
 */
export function readMDXFile(filePath: string): ParsedFrontmatter {
  let rawContent = fs.readFileSync(filePath, 'utf-8');
  return parseFrontmatter(rawContent);
}

/**
 * 获取指定目录下所有 MDX 文件的数据
 * @param {string} dir - 目录路径
 * @returns {Array} MDX 文件数据对象数组
 */
export function getMDXData(dir: string): MDXDataItem[] {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path
      .basename(file, path.extname(file))
      .replace(/ /g, '')
      .toLowerCase();

    return {
      metadata,
      slug,
      content,
    };
  });
}

/**
 * 格式化日期
 * @param {string} date - ISO 格式的日期字符串
 * @returns {string} 格式化后的日期字符串
 */
export function formatDate(date: string): string {
  return format(parseISO(date), 'MMMM dd, yyyy');
}
