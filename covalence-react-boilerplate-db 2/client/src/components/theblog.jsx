<div className="card">
<div className="card-header">
  {this.state.blog.title}{" "}
  <button type="button" className="close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
<div className="card-body">
  <blockquote className="blockquote mb-0">
    <p>{this.state.blog.content}</p>
    <footer className="blockquote-footer">
      Someone famous in{" "}
      <cite title="Source Title">Source Title</cite>
    </footer>
  </blockquote>
</div>
<div className="card-footer text-muted d-flex justify-content-between align-items-center">
  {this.postedSince(this.state.blog._created)} ago{" "}
  <button type="button" className="btn btn-primary">
    Click to Update
  </button>
</div>
</div>