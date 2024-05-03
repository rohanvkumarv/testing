"use client"

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { metadata } from '@/app/layout'

const page = () => {
    const { id } = useParams()
    const [data, setData] = useState({} as any)
    const getProject = async () => {
        const response = await axios.post("/api/getpreview", { id })
        if (response) {
            console.log(response.data)
            setData(response.data)
        }
    }
    useEffect(() => {
        getProject()
    }, [])
    return (
        <div>
            <Button>
                <Link href={data.url ? data.url : ""} download={true} >Download</Link>
            </Button>
        </div>
    )
}

export default page