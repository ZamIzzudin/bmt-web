/* eslint-disable react-hooks/exhaustive-deps */
import { Row, Col, InputGroup, Form } from "react-bootstrap"
import { useState, useEffect } from 'react'
import api from '../utils/api'

import { ReactComponent as ArrowOrgDown } from '../assets/icons/arrow_org.svg'
import { ReactComponent as ArrowOrgUp } from '../assets/icons/arrow_org_up.svg'

import '../styles/components/FormLayout.css'

export default function KategoriFilterForm({ setData, currentData }) {
    const [expand, setExpand] = useState(false)

    const [listKategori, setlistKategori] = useState([])
    const [dynamicKategori, setDynamicKategori] = useState('')
    const [kategoriBerita, setKategoriBerita] = useState(currentData || [])

    function addKategori(newKategori) {
        let pre = [...kategoriBerita]
        if (kategoriBerita.length === 0) {
            pre.push(newKategori)
        } else {
            if (!kategoriBerita.includes(newKategori)) {
                pre.push(newKategori)
            }
        }

        setKategoriBerita(pre)
    }

    function addNewKategori() {
        let pre = [...kategoriBerita]
        if (kategoriBerita.length === 0) {
            pre.push(dynamicKategori)
        } else {
            if (!kategoriBerita.includes(dynamicKategori)) {
                pre.push(dynamicKategori)
            }
        }
        setDynamicKategori('')
        setKategoriBerita(pre)
    }

    function deleteKategori(selectedKategori) {
        const pre = kategoriBerita.filter(item => item !== selectedKategori)
        setKategoriBerita(pre)
    }

    async function getListKategori() {
        const data = await api.GetKategori()
        setlistKategori(data)
    }

    useEffect(() => {
        setData(kategoriBerita)
    }, [kategoriBerita])

    useEffect(() => {
        getListKategori()
    }, [])

    return (
        <div className="filter-category">
            <div className="filter-header">
                {kategoriBerita.length === 0
                    ? (<div className="filter-header-button" onClick={() => setExpand(!expand)}>
                        <span>Choose Kategori</span>
                        <ArrowOrgDown />
                    </div>)
                    : (<div className="filter-header-button">
                        <div className="filter-item-container">
                            {kategoriBerita.map(item =>
                                <span className="filter-item">
                                    {item}
                                    <button type="button" onClick={() => deleteKategori(item)}>X</button>
                                </span>)
                            }
                        </div>
                        <div onClick={() => setExpand(!expand)}>
                            <ArrowOrgUp />
                        </div>
                    </div>)}
            </div>
            <div className={`filter-body ${expand && ('showed')}`}>
                <Row>
                    <InputGroup className="kategori-dynamic-form">
                        <button onClick={() => addNewKategori()} type="button">+</button>
                        <Form.Control value={dynamicKategori} onChange={(e) => setDynamicKategori(e.target.value)} placeholder="New Kategori" />
                    </InputGroup>
                    <Col>
                        <ul>
                            {listKategori.map((kategori, index) => (
                                <>
                                    {index % 2 === 0 && (
                                        <li>
                                            <button onClick={() => addKategori(kategori)} type="button">+</button>
                                            {kategori}
                                        </li>
                                    )}
                                </>
                            ))}
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            {listKategori.map((kategori, index) => (
                                <>
                                    {index % 2 !== 0 && (
                                        <li>
                                            <button onClick={() => addKategori(kategori)} type="button">+</button>
                                            {kategori}
                                        </li>
                                    )}
                                </>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </div>
        </div>
    )
}