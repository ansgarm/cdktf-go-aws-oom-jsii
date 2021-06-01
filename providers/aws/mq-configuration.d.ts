import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MqConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_configuration.html#authentication_strategy MqConfiguration#authentication_strategy}.
     */
    readonly authenticationStrategy?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_configuration.html#data MqConfiguration#data}.
     */
    readonly data: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_configuration.html#description MqConfiguration#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_configuration.html#engine_type MqConfiguration#engine_type}.
     */
    readonly engineType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_configuration.html#engine_version MqConfiguration#engine_version}.
     */
    readonly engineVersion: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_configuration.html#name MqConfiguration#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_configuration.html#tags MqConfiguration#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_configuration.html#tags_all MqConfiguration#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/mq_configuration.html aws_mq_configuration}.
 */
export declare class MqConfiguration extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/mq_configuration.html aws_mq_configuration} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: MqConfigurationConfig);
    get arn(): string;
    private _authenticationStrategy?;
    get authenticationStrategy(): string;
    set authenticationStrategy(value: string);
    resetAuthenticationStrategy(): void;
    get authenticationStrategyInput(): string | undefined;
    private _data;
    get data(): string;
    set data(value: string);
    get dataInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _engineType;
    get engineType(): string;
    set engineType(value: string);
    get engineTypeInput(): string;
    private _engineVersion;
    get engineVersion(): string;
    set engineVersion(value: string);
    get engineVersionInput(): string;
    get id(): string;
    get latestRevision(): number;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
