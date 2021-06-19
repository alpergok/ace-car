import React from 'react';
import '../css/Search.css';

function Search() {
    return (
        <div>
            <div className="page-wrapper p-t-100 p-b-120">
                <div className="wrapper wrapper--w900">
                    <div className="card card-6">
                        <div className="card-body">
                            <form method="POST" action="#">
                                <div className="row row-space">
                                    <div className="col-2">
                                        <div className="input-group">
                                            <label className="label">Kalkış</label>
                                            <input className="input--style-1" type="text" name="from" placeholder="İl veya ilçe adı..." required="required" />
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="input-group">
                                            <label className="label">Varış</label>
                                            <input className="input--style-1" type="text" name="to" placeholder="İl veya ilçe adı..." required="required" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-space">
                                    <div className="col-2">
                                        <div className="input-group">
                                            <label className="label">Tarih</label>
                                            <input className="input--style-1" type="date" name="depart" placeholder="GG/AA/YYYY" id="input-start" />

                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="input-group" id="js-select-special">
                                            <label className="label">Yolcu Sayısı</label>
                                            <input className="input--style-1 input--text-small" type="text" name="passengers" value="1 Kişi" disabled="disabled" id="info" />
                                            <i className="zmdi zmdi-plus input-icon"></i>
                                        </div>
                                    </div>
                                    <div className="search-button">
                                        <button className="btn-submit m-b-0" type="submit">Yolculuk Ara</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;