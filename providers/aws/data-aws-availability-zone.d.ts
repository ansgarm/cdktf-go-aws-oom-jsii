import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsAvailabilityZoneConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone.html#all_availability_zones DataAwsAvailabilityZone#all_availability_zones}.
     */
    readonly allAvailabilityZones?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone.html#name DataAwsAvailabilityZone#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone.html#state DataAwsAvailabilityZone#state}.
     */
    readonly state?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone.html#zone_id DataAwsAvailabilityZone#zone_id}.
     */
    readonly zoneId?: string;
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone.html#filter DataAwsAvailabilityZone#filter}
     */
    readonly filter?: DataAwsAvailabilityZoneFilter[];
}
export interface DataAwsAvailabilityZoneFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone.html#name DataAwsAvailabilityZone#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone.html#values DataAwsAvailabilityZone#values}.
     */
    readonly values: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/availability_zone.html aws_availability_zone}.
 */
export declare class DataAwsAvailabilityZone extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/availability_zone.html aws_availability_zone} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsAvailabilityZoneConfig);
    private _allAvailabilityZones?;
    get allAvailabilityZones(): boolean;
    set allAvailabilityZones(value: boolean);
    resetAllAvailabilityZones(): void;
    get allAvailabilityZonesInput(): boolean | undefined;
    get groupName(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    get nameSuffix(): string;
    get networkBorderGroup(): string;
    get optInStatus(): string;
    get parentZoneId(): string;
    get parentZoneName(): string;
    get region(): string;
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string | undefined;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    resetZoneId(): void;
    get zoneIdInput(): string | undefined;
    get zoneType(): string;
    private _filter?;
    get filter(): DataAwsAvailabilityZoneFilter[];
    set filter(value: DataAwsAvailabilityZoneFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsAvailabilityZoneFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
