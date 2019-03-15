module.exports.acceptLetter = (name, university) => {
    return `
        <p><strong>Dear ${name},</strong></p>
        <p>Congratulations! It is my great pleasure to inform you that you have been admitted to the ${university}’s Class of ${(new Date()).getFullYear() + 4}. With your exceptional academic record, strong voice, and impressive accomplishments, you have distinguished yourself in one of the largest and most competitive applicant pools.</p>
        <p>For over a century, the College’s academic tradition has thrived because of students like you who crave ideas that captivate, provoke, and transform. We imagine you in our laboratories and on our performance stages, in our libraries and on our athletic fields, immersed in your passions and engaged in the pursuit of knowledge. As part of our College Houses, you will cultivate lifelong friendships; in our classrooms, you will create and inhabit a vibrant intellectual space with your peers and professors.</p>
        <p>We invite you to be part of a school with a glorious history and an exciting present. We look to you to help us grow, to grow with us, and to be part of a tradition that elevates us all.</p>
        <p>Sincerely,</p>
        <p>Topher Brown - Dean of Admissions and QAF</p>
    `
}

module.exports.rejectLeter = (name, university) => {
    return `
        <p><strong>Dear ${name},</strong></p>
        <p>Thank you for submitting your application to ${university}. After careful review of your application materials, we are unable to offer you admission to the university.</p>
        <p>Admission to ${university} is highly selective, and the Admissions Committee had to make some difficult decisions given the size and depth of our applicant pool. While I understand you are likely disappointed with this decision, please know that it is a reflection of the level of competition within the applicant pool. </p>
        <p>We wish you the best as you work toward fulfilling your educational goals.</p>
        <p>Sincerely,</p>
        <p>Topher Brown - Dean of Admissions and QAF</p>
    `
}

module.exports.rescindLetter = (name, university) => {
    return `
        <p><strong>Dear ${name},</strong></p>
        <p>Recently, it was our privilege to offer you admission to the ${university}’s Class of ${(new Date()).getFullYear() + 4}. The admissions committee has received your latest semester transcript and it is my duty to tell you that your admissions offer has been revoked.</p>
        <p>As you may recall, the oficial letter of acceptance from ${university} was contingent upon successful completion of all present academic work outlined in your application and the continued progress of your duties as a student.</p>
        <p>I am sorry to have to write this letter but all decisions are final.</p>
        <p>Sincerely,</p>
        <p>Topher Brown - Dean of Admissions and QAF</p>
    `
}