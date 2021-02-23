import React from 'react'
import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { PostHeaderData } from '../types/post'
import renderToString from 'next-mdx-remote/render-to-string'

type ContentType = "blog" | "pages"

function getPath(dir: ContentType) {
    return join(process.cwd(), '_content', dir)
}

export function getFiles(dir: ContentType) {
    return fs.readdirSync(getPath(dir))
}

export async function getFileBySlug(slug: string, dir: ContentType) {
    const file = fs.readFileSync(join(getPath(dir), `${slug}.mdx`), 'utf-8')
    const { data, content } = matter(file)

    const mdxSource = await renderToString(content, {
        components: { name: React.Component },
        mdxOptions: {
        }
    })

    return {
        mdxSource,
        slug,
        frontmatter: data as PostHeaderData
    }
}

export function getAllPostFrontmatter(dir: ContentType) {
    const files: Array<{ slug: string, frontmatter: PostHeaderData }> = getFiles(dir).map(filename => {
        const slug = filename.replace(/\.mdx$/, '')
        const file = fs.readFileSync(join(getPath(dir), filename), 'utf-8')
        const { data } = matter(file)
        const frontmatter: PostHeaderData = {
            title: data.title,
            date: data.date,
            description: data.description,
            published: data.published,
            listed: data.listed,
        }
        return { slug, frontmatter }
    })

    return files
}

export function getFilenameFromSlug(slug: string, dir: ContentType) {
    const files = getFiles(dir).map(file => file.replace(/\.md$/, ''))

    if (files.find((file => file === slug)))
        return slug

    const slugFile = files.find(((file) => {
        const sepIdx = file.indexOf('--')
        if (sepIdx) {
            const substr = file.substr(sepIdx + 2)
            return encodeURIComponent(substr) === slug
        }
    }))
    return slugFile
}
