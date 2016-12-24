package com.royal.app.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Event.
 */
@Entity
@Table(name = "event")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Event implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "event_name")
    private String eventName;

    @Column(name = "groom_name")
    private String groomName;

    @Column(name = "pride_name")
    private String prideName;

    @NotNull
    @Column(name = "event_start_date", nullable = false)
    private ZonedDateTime eventStartDate;

    @NotNull
    @Column(name = "event_end_date", nullable = false)
    private ZonedDateTime eventEndDate;

    @ManyToOne
    private Hall hall;

    @ManyToOne
    private Contract contract;

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "event_option",
               joinColumns = @JoinColumn(name="events_id", referencedColumnName="ID"),
               inverseJoinColumns = @JoinColumn(name="options_id", referencedColumnName="ID"))
    private Set<ExtraOption> options = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEventName() {
        return eventName;
    }

    public Event eventName(String eventName) {
        this.eventName = eventName;
        return this;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public String getGroomName() {
        return groomName;
    }

    public Event groomName(String groomName) {
        this.groomName = groomName;
        return this;
    }

    public void setGroomName(String groomName) {
        this.groomName = groomName;
    }

    public String getPrideName() {
        return prideName;
    }

    public Event prideName(String prideName) {
        this.prideName = prideName;
        return this;
    }

    public void setPrideName(String prideName) {
        this.prideName = prideName;
    }

    public ZonedDateTime getEventStartDate() {
        return eventStartDate;
    }

    public Event eventStartDate(ZonedDateTime eventStartDate) {
        this.eventStartDate = eventStartDate;
        return this;
    }

    public void setEventStartDate(ZonedDateTime eventStartDate) {
        this.eventStartDate = eventStartDate;
    }

    public ZonedDateTime getEventEndDate() {
        return eventEndDate;
    }

    public Event eventEndDate(ZonedDateTime eventEndDate) {
        this.eventEndDate = eventEndDate;
        return this;
    }

    public void setEventEndDate(ZonedDateTime eventEndDate) {
        this.eventEndDate = eventEndDate;
    }

    public Hall getHall() {
        return hall;
    }

    public Event hall(Hall hall) {
        this.hall = hall;
        return this;
    }

    public void setHall(Hall hall) {
        this.hall = hall;
    }

    public Contract getContract() {
        return contract;
    }

    public Event contract(Contract contract) {
        this.contract = contract;
        return this;
    }

    public void setContract(Contract contract) {
        this.contract = contract;
    }

    public Set<ExtraOption> getOptions() {
        return options;
    }

    public Event options(Set<ExtraOption> extraOptions) {
        this.options = extraOptions;
        return this;
    }

    public Event addOption(ExtraOption extraOption) {
        options.add(extraOption);
        return this;
    }

    public Event removeOption(ExtraOption extraOption) {
        options.remove(extraOption);
        return this;
    }

    public void setOptions(Set<ExtraOption> extraOptions) {
        this.options = extraOptions;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Event event = (Event) o;
        if (event.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, event.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Event{" +
            "id=" + id +
            ", eventName='" + eventName + "'" +
            ", groomName='" + groomName + "'" +
            ", prideName='" + prideName + "'" +
            ", eventStartDate='" + eventStartDate + "'" +
            ", eventEndDate='" + eventEndDate + "'" +
            '}';
    }
}