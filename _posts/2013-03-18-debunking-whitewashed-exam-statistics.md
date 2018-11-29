---
title: Debunking whitewashed exam statistics
category: Education
excerpt: The official statistics of a recent exam present an incorrectly positive picture. When taking a closer look, the numbers turn out to be a lot worse.
---
**Edit (March 19, 2013):** I updated my calculations at the end to no longer include phantom students. While their inclusion was meant to highlight a disregard of their needs, I inadvertently and unfairly ended up distorting the numbers in favor of my argument.

<hr>

In “[Why students fail entry-level programming exams](#!/posts/why-students-fail-entry-level-programming-exams)” I referenced a lecture in which the resit was scheduled six months after the original exam. Said lecture did not offer any help in the interim, which I assumed would not yield an improved outcome over the first exam.

The results are in. I was right on target.

The official statistics for both exams as well as a provided summary are mirrored here:

- [First exam](/documents/statistics-first-exam.pdf)
- [Second exam](/documents/statistics-second-exam.pdf)
- [Contingency table and conclusion](/documents/contingency-table.pdf)

These statistics leave a lot to be desired, with important pieces of information missing from the conclusion.

## What they are selling

The officials combined the statistics of both exams in one contingency table. In the following representation, the y-axis describes the first exam while the x-axis describes the resit:

<table id="contingency-table">
  <thead>
    <th></th>
    <th>not registered</th>
    <th>no-shows</th>
    <th>not graded</th>
    <th>failed</th>
    <th>passed</th>
    <th>Sum</th>
  </thead>
  <tfoot>
    <tr>
      <th>Sum</th>
      <th>197</th>
      <th>42</th>
      <th>72</th>
      <th>46</th>
      <th>46</th>
      <th>403</th>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <th>not registered</th>
      <td>&mdash;</td>
      <td>9</td>
      <td>17</td>
      <td>8</td>
      <td>5</td>
      <th>39</th>
    </tr>
    <tr>
      <th>no-shows</th>
      <td>65</td>
      <td>14</td>
      <td>17</td>
      <td>9</td>
      <td>4</td>
      <th>109</th>
    </tr>
    <tr>
      <th>not graded</th>
      <td>17</td>
      <td>3</td>
      <td>14</td>
      <td>2</td>
      <td>4</td>
      <th>40</th>
    </tr>
    <tr>
      <th>failed</th>
      <td>45</td>
      <td>16</td>
      <td>24</td>
      <td>27</td>
      <td>28</td>
      <th>140</th>
    </tr>
    <tr>
      <th>passed</th>
      <td>70</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>5</td>
      <th>75</th>
    </tr>
  </tbody>
</table>

From this, the following conclusion has been drawn:

<table>
  <thead>
    <tr>
      <th></th>
      <th>First exam</th>
      <th>Second exam</th>
      <th>After both</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <th>graded</th>
      <th>100% (215)</th>
      <th>100% (92)</th>
      <th>100% (247)</th>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <th>failed</th>
      <td>65% (140)</td>
      <td>50% (46)</td>
      <td>53% (131)</td>
    </tr>
    <tr>
      <th>passed</th>
      <td>35% (75)</td>
      <td>50% (46)</td>
      <td><strong>47%</strong> (116)</td>
    </tr>
  </tbody>
</table>

This table is meant to highlight one thing: 116 out of 247 students passed the exam. A quota of 47% is unexpectedly high, considering how “advanced” the topic is for many beginners attending the lecture.

The reason for this surprising conclusion is simple: it is **misleading and masks vital information**.

## Why I am not buying it

There are several flaws in the argumentation that are not exactly hidden, but it requires a closer look in order to see how these statistics are misrepresenting the facts.

### Resources seem more valuable than students

The first problem is an insult directed towards students. It does not appear in the data directly but has been added to the provided statistics: the officials blame both students who failed as well as no-shows for wasting resources.

Consider the available options:

- Students could register for the exam and not show up.
- Students could register, take the exam and opt out of having it graded. Their exams would be disregarded entirely.
- Student could register, take the exam and have it graded, meaning they could either pass or fail.

The officials complained about the fact that, for the first exam, 30% of registered students did not show up. Had these withdrawn their registrations, which was possible up until about a week before the exam, two rooms and four supervisors would not have been necessary. The number of no-shows slightly dropped to 20% for the second exam.

Additionally, more than half of the 140 students who failed were blamed for not opting out of having their exams graded. Had they realized during the exam that they would not be able to pass, they could have forfeited and saved the correctors a little time.

While certainly true, these arguments show a severe lack of empathy: **exams should be about students, not organizers**.

Chances are students neither failed nor stayed away out of spite, and the fact that this seems to be the officials’ main concern is problematic.

The option of not having your exam graded is rarely used, because some students tend to favor “passing with a bad grade” over “not passing at all”. Just barely making it should certainly not be something to aim for, but is an understandable goal considering failed lectures have to be taken again, adding to a later semester‘s predetermined and often heavy workload.

Not going to an exam one registered for is a decision that does not come easily, because it makes having to attend this lecture a second time a certainty. Not showing up is often the result of not getting a chance to prepare properly, which is not exclusively a matter of time, but more importantly of how well a subject has been taught.

Not standing a chance often only becomes clear within the last few days before an exam, sometimes even on the day of the exam. At this point, withdrawing your registration is no longer possible. When facing one‘s own incompetence, withdrawing a registration is rarely a primary concern anyways.

Instead of complaining about how students wasted the college‘s time (and potentially money), the focus should be on trying to identify their reasoning behind doing so in order to prevent the same from happening again.

Blaming those you were meant to teach for not learning is not going to motivate them to try harder.

### Exam and lecture are not independent

The conclusion gives off the impression that 100% of exams have been graded when they clearly have not. The number of graded exams has been given way more relevance than it deserves.

The absence of two core demographics in the conclusion is obvious: **neither no-shows nor those that opted out of having their exam graded are being taken into account**.

These students certainly did not successfully attend the lecture. They may not have gotten a bad grade to prove it, but taking an exam and not passing should be considered equal to failure.

The given treatment wrongly separates the exams from the lecture as a whole. Success is purely measured in how many _graded_ exams achieved a passing grade, those that did not _actively_ take the exam are deemed irrelevant.

Fortunately, we have numbers for the missing demographics: the total number of students registered for one or both of the exams is 403.

If we shift the focus from “passing the exam” to “passing the lecture”, the quota drops from 47% (116 out of 247 students) to 29% (116 out of 403 students).

On the other hand, if we combine no-shows, opt-outs and those that failed the exam into a group “failing the lecture“, we end up with 71% (287 out of 403 students).

Let that sink in for a minute.

### “Passing” does not equal success

A student needs to achieve a minimum score of 40% in order to pass an exam. Knowing only those 40% does not mean someone understood the topic, it means they barely made it and do not have to take the exam again.

Both exams had a maximum score of 18 points, with a minimum of eight being required in order to pass. The lower grades have been achieved most often in both cases:

<figure>
  <img src="http://islovely.herokuapp.com/posts/debunking-whitewashed-exam-statistics/stacked-graph.png" alt="Combined results of both exams.">
  <figcaption>
    Combined results of both exams.
  </figcaption>
</figure>

Since there is no practical difference between scores of seven and lower, they can be grouped together into a single class, represented in the following chart by a score of zero:

<figure>
  <img src="http://islovely.herokuapp.com/posts/debunking-whitewashed-exam-statistics/stacked-graph-grouped.png" alt="Results with all scores representing failure grouped together.">
  <figcaption>
    Results with all scores representing failure grouped together.
  </figcaption>
</figure>

Even out of those that passed, the lower grades should not be considered successes. If we combine the top third of grades (13 to 18 out of 18 points) into a group of “passed successfully” and the remaining grades into “passed”, we get the following graph:

<figure>
  <img src="http://islovely.herokuapp.com/posts/debunking-whitewashed-exam-statistics/stacked-graph-classes.png" alt="Results grouped into ‘passed successfully’, ‘passed’ and ‘failed’.">
  <figcaption>
    Results grouped into ‘passed successfully’, ‘passed’ and ‘failed’.
  </figcaption>
</figure>

The groups are distributed unevenly, but roughly represent the actual classification.

### Phantoms not considered

The contingency table only combines information tracked for the exams:

- how many students registered
- how many students did not show up
- how many students opted out of having their exam graded
- how many students failed
- how many students passed

The top left field has intentionally been left blank, because no data is available for it: **lecture attendance has not been tracked**, which makes is impossible to know how many students initially attended but did not end up taking either exam.

I personally know several people that attended at first, came to the conclusion they would never understand the subject, and then **dropped Computer Science as their minor**.

Assuming that the ones I know of are not isolated cases, it is save to assume that a relatively large number of students attended the lecture and ended up leaving Computer Science. Some might have changed their major or dropped out entirely.

My conservative guess is “at least 25 people”, but a number closer to 100 would not surprise me. These phantom students are not being taken into account when measuring the lecture‘s success.

### Combining the findings

Even when ignoring the likely existence of phantom students, only 29% (116 out of 403 students) passed after both exams. To put it differently, **fewer than one out of three students passed the lecture.**

When taking out grades below B-, the number of “successful” attendants drops from 116 to 48, which leaves only 12% (48 out of 403 students).

This result is still a tiny bit too optimistic, because it potentially counts the five students that took both exams twice, which is incorrect if their results fell into the considered range both times.

The outcome does not change by a lot when accounting for that possibility: **one out of nine students successfully passed the lecture**.

Several others passed with a more limited understanding of what has been taught, while **71% failed the lecture**.

When assuming any number of phantom students, these numbers shift in favor of “failing”.

## Conclusion

The actual result, when considering the entire lecture, lies _far_ below the official success rate of 47%. Even when considering “barely passing” a success, fewer than one out of three students actually succeeded.

The only aspect under which this is acceptable is if this lecture was aimed at weeding out beginners struggling with the subject by not giving them a fighting chance. If the motivation lies in the actual education of students, this lecture should be considered a failure.

Whitewashing the facts cannot hide the red flags in these results. The subject at hand may be “advanced” considering the audience, but failure rates of this magnitude can and should be avoided.
