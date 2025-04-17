import { FC } from 'react'

interface DonateOption {
  amount: number
  title: string
  description: string
}

const DonateSection: FC = () => {
  const donateOptions: DonateOption[] = [
    {
      amount: 2000,
      title: "「人權，沒有人可以從你身上奪走」",
      description: "研究資源深入當地(如阿富汗)，持續監督並揭露不人道行為"
    },
    {
      amount: 1500,
      title: "「成為你想看到的改變」",
      description: "向各國政府施壓，以終止侵害暴民人權的行為"
    },
    {
      amount: 800,
      title: "「每個一個地方的非正義是每個正義的威脅」",
      description: "給一個家，就援救出的下一個明天"
    },
    {
      amount: 500,
      title: "「一個孩子，一位老師，一本書，一支筆可以改變世界」",
      description: "發起全球倡議活動，引起國際關注並凝聚力量"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">塔利班禁止女孩接受教育</h2>
            <div className="prose max-w-none">
              <p>「女兒不會再餓肚子了。」35歲的 Khorsheed*，因經濟危機，將13歲的女兒嫁給了30歲的鄰居，以換取約2萬台幣的「聘金」。</p>
              <p>自2021年8月塔利班控制阿富汗以來，持續侵犯婦女和女孩的受教權、工作權和行動自由權，戰爭及不斷惡化的貧窮，讓阿富汗的童婚，早婚或強迫婚姻率快速增加。</p>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">請對阿富汗女性伸出你的援手</h3>
            <div className="space-y-4">
              {donateOptions.map((option, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-lg mb-2">{option.title}</h4>
                      <p className="text-gray-600">{option.description}</p>
                    </div>
                    <span className="text-xl font-bold">${option.amount}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DonateSection