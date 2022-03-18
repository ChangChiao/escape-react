import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function ArticleDetail() {
  const { articleId } = useParams();
  const [detail, setDetail] = useState({});
  const getData = () => { //1
    axios
      .get(`${process.env.REACT_APP_URL}api/react/article/${articleId}`)
      .then((response) => {
        setDetail(response.data.article);
      });
  };
  const handleChange = (event) => {
    const { id, value } = event.target;
    setDetail({
      ...detail,
      [id]: value
  })
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-white">
              <h5 className="card-title">文章內容</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    文章名稱
                  </label>
                  <input type="text" onChange={handleChange} value={detail.title} className="form-control" id="title" />
                </div>
                <div className="mb-3">
                  <label htmlFor="author" onChange={handleChange} className="form-label">
                    文章作者
                  </label>
                  <input type="text" onChange={handleChange} value={detail.author} className="form-control" id="author" />
                </div>
                <div className="mb-3">
                  <label htmlFor="content" className="form-label">
                    文章描述
                  </label>
                  <textarea value={detail.content} onChange={handleChange} className="form-control" id="content" />
                </div>
                <div className="row gx-1 mb-3">
                  <div className="col-md-2 mb-1">
                    <div className="input-group input-group-sm">
                      <input
                        type="text"
                        className="form-control form-control"
                        id="tag"
                        placeholder="請輸入標籤"
                        value={detail.tag}
                        onChange={handleChange}
                      />
                      <button type="button" className="btn btn-outline-danger">
                        x
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-white">
              <h5 className="card-title">文章圖片</h5>
            </div>
            <div className="card-body">...</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleDetail;
