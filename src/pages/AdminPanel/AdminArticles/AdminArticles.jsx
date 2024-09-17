import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Editor from '../../../Editor/Editor';
import {
  articlesQuery,
  articlesSubmitQuery,
  deleteArticleQuery,
  editPublishQuery,
} from '../../../hooks/articlesQuery';
import { useQueryClient } from '@tanstack/react-query';
import Pagination from '../../../components/Pagination/Pagination';
export default function AdminArticles() {
  const queryClient = useQueryClient();
  const [articleCover, setArticleCover] = useState({});
  const [articleBody, setArticleBody] = useState('');
  const [articleName, setArticleName] = useState('');
  const [articleSummery, setArticleSummery] = useState('');
  const { data: articleData, isSuccess } = articlesQuery();
  const { mutate: articleMutate } = articlesSubmitQuery();
  const { mutate: articlePublishedMutate } = editPublishQuery();
  const { mutate: articleDeleteMutate } = deleteArticleQuery();
  const [shownArticles, setShownArticles] = useState();
  const useArticle = (event) => {
    articleMutate(
      {
        title: articleName,
        desc: articleSummery,
        completed: 'true',
        published: 'false',
        pic: articleCover,
        body: articleBody,
      },
      {
        onSuccess: () => {
          Swal.fire({
            title: 'article added successfully',
            icon: 'success',
          }).then(() => {
            queryClient.invalidateQueries('articles');
          });
        },
      }
    );
  };
  const showSummery = (articleID) => {
    const selectedArticleSummery = articleData?.filter(
      (article) => article.id === articleID
    );
    console.log(selectedArticleSummery[0]?.desc);

    Swal.fire({
      title: 'Article Summery',
      html: ` <p> ${selectedArticleSummery[0]?.desc}</p>`,
    });
  };
  const showBody = (articleID) => {
    const selectedArticle = articleData?.filter(
      (article) => article.id === articleID
    );
    console.log(selectedArticle[0]?.body);

    Swal.fire({
      title: 'Article Summery',
      html: ` <div> ${selectedArticle[0]?.body}</div>`,
    });
  };
  const articlePublished = (articleID) => {
    const selectedArticle = articleData?.filter(
      (article) => article.id === articleID
    );
    Swal.fire({
      title: 'are you sure about publishing this article?',
      icon: 'success',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        articlePublishedMutate(
          {
            article: selectedArticle,
            id: articleID,
          },

          {
            onSuccess: () => {
              Swal.fire({
                title:
                  'your change has been submitted , you can check it from your Panel ',
                icon: 'success',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#083344',
              });
            },
          }
        );
      }
    });
  };
  const deleteArticle = (articleID) => {
    Swal.fire({
      title: 'are you sure about deleting this article?',
      icon: 'success',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        articleDeleteMutate(articleID, {
          onSuccess: () => {
            Swal.fire({
              title:
                'your change has been submitted , you can check it from your Panel ',
              icon: 'success',
              confirmButtonText: 'Ok',
              confirmButtonColor: '#083344',
            });
          },
        });
      }
    });
  };

  return (
    <div className="w-[95%] mx-auto p-1 text-right">
      <div>
        <h1 className="text-xl font-semibold text-textPrimary  w-full border-b border-bgPrimary/70 pb-3">
          اضافه کردن مقاله جدید
        </h1>
        <div className="     my-5 flex flex-row-reverse flex-wrap justify-between items-center gap-5">
          <div>
            <label
              htmlFor="name"
              className="text-lg font-thin text-textPrimary ">
              {' '}
              : نام مقاله{' '}
            </label>

            <input
              type="text"
              name="name"
              id="title"
              className="w-full p-1 px-2 bg-bgPrimary text-textPrimary  font-medium text-lg border rounded-md shadow-md focus:outline-none  m-1"
              value={articleName}
              onChange={(e) => setArticleName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-lg font-thin text-textPrimary ">
              {' '}
              : عکس مقله
            </label>
            <input
              type="file"
              dir="rtl"
              name="password"
              className="max-w-[20rem] p-1 px-2 bg-bgPrimary text-textPrimary  font-medium text-lg border rounded-md shadow-md focus:outline-none  m-1"
              onChange={(event) => {
                setArticleCover(event.target.files[0]);
              }}
            />
          </div>

          <div>
            <label
              htmlFor="name"
              className="text-lg font-thin text-textPrimary ">
              {' '}
              : چکیده مقاله{' '}
            </label>

            <input
              type="text"
              name="name"
              id="desc"
              className="w-full p-1 px-2 bg-bgPrimary text-textPrimary  font-medium text-lg border rounded-md shadow-md focus:outline-none  m-1"
              value={articleSummery}
              onChange={(e) => setArticleSummery(e.target.value)}
            />
          </div>
          <div className="w-full mx-auto">
            <Editor value={articleBody} setValue={setArticleBody} />
          </div>
          <div>
            <button
              className=" mt-4 py-2 px-5 rounded-md   bg-textPrimary hover:bg-textPrimary/90 text-bgPrimary font-semibold text-base "
              type="submit"
              onClick={useArticle}>
              <span>ثبت مقاله</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-semibold text-textPrimary  w-full border-b border-bgPrimary/70 pb-3">
          {' '}
          مقاله ها
        </h1>
        <table className="w-full my-4 ">
          <thead>
            <tr className="p-3  md:text-lg text-base  font-medium text-textPrimary flex justify-between items-center flex-row-reverse border-b-2 border-bgPrimary/70 mb-3">
              <td>نام مقاله</td>
              <td>انتشار </td>
              <td>خلاصه مقاله</td>
              <td>متن مقاله</td>
              <td>ادیت</td>
              <td>حذف</td>
            </tr>
          </thead>
          <tbody>
            {shownArticles?.map((article) => (
              <tr className="p-2 text-sm md:text-base font-light  flex justify-between items-center flex-row-reverse text-textPrimary">
                <td>{article.title}</td>
                <td>
                  {article.published === true ? 'published' : 'unpublished'}
                </td>

                <td className=" bg-bgPrimary hover:bg-bgPrimary/70  p-1 px-2 rounded-sm text-sm md:text-base">
                  <button onClick={(e) => showSummery(article.id)}>
                    مشاهده خلاصه
                  </button>
                </td>
                <td className=" bg-bgPrimary hover:bg-bgPrimary/70  p-1 px-2 rounded-sm text-sm md:text-base">
                  <button onClick={(e) => showBody(article.id)}>
                    مشاهده متن
                  </button>
                </td>
                <td className=" bg-bgPrimary hover:bg-bgPrimary/70  p-1 px-2 rounded-sm text-sm md:text-base">
                  <button onClick={(e) => articlePublished(article.id)}>
                    {article.published === true ? 'unpublished' : 'publish'}
                  </button>
                </td>
                <td className=" bg-bgPrimary hover:bg-bgPrimary/70  p-1 px-2 rounded-sm text-sm md:text-base">
                  <button onClick={(e) => deleteArticle(article.id)}>
                    حذف مقاله
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isSuccess && (
          <Pagination
            itemCount={5}
            setShownItems={setShownArticles}
            items={articleData}
            pathname="/admin-panel/articles"
          />
        )}
      </div>
    </div>
  );
}
